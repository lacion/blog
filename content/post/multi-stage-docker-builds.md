---
author: Luis Morales
date: '2017-04-29T00:00:00Z'
linktitle: Multistage Docker Builds
title: Multistage Docker Builds
tags:
- docker
- engineering
- development
categories:
- Docker
- Development

---
I talked about how to create [slim containers]({{< ref "post/tiny-docker-images.md" >}}) with only the necessary dependencies to run your applications in the past, but now next release of docker features multistage containers that reduce the complexity of having a build container and them copying your final application to a run container.

More in-depth details about what multi-stage builds are can be seen in this 2 github issues [#32063](https://github.com/moby/moby/pull/32063) and [#31257](https://github.com/moby/moby/pull/31257)

Docker multi-stage builds are available starting [v17.05.0-ce-rc1](https://github.com/moby/moby/releases/tag/v17.05.0-ce-rc1) and [v17.05.0-ce-rc2](https://github.com/moby/moby/releases/tag/v17.05.0-ce-rc2), if your using Mac using latest release of beta channel will be enough to start using this.

What before was 2 containers and 2 dockerfiles we can now reduce to:

```
# Build stage
FROM lacion/docker-alpine:gobuildimage AS build-stage
ENV GOROOT=/usr/lib/go \
    GOPATH=/gopath \
    GOBIN=/gopath/bin \
    PROJPATH=/gopath/src/github.com/lacion/foo
# Because of https://github.com/docker/docker/issues/14914
ENV PATH=$PATH:$GOROOT/bin:$GOPATH/bin

ADD . /gopath/src/github.com/lacion/foo
WORKDIR /gopath/src/github.com/lacion/foo

RUN make build-alpine

# Final Stage
FROM lacion/docker-alpine:latest

ARG GIT_COMMIT
ARG VERSION
LABEL REPO="https://github.com/lacion/foo"
LABEL GIT_COMMIT=$GIT_COMMIT
LABEL VERSION=$VERSION

# Because of https://github.com/docker/docker/issues/14914
ENV PATH=$PATH:/opt/foo/bin

WORKDIR /opt/foo/bin

COPY --from=build-stage /gopath/src/github.com/lacion/foo/bin/foo /opt/foo/bin/
RUN chmod +x /opt/foo/bin/foo

CMD /opt/foo/bin/foo

```

All of this means, we can now reduce the amount of code to maintain and the complexity of it, it also means our [makefiles]({{< ref "post/makefile-is-awesome.md" >}}) will be less complex and easier to understand.