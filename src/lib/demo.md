---
author: lauhard
---

# Docker cheatsheet

<!-- <!-- markdownlint-disable -->

<!-- TOC tocDepth:2..3 chapterDepth:2..6 -->

- [1. start docker desktop](#1-start-docker-desktop)
- [2. add current user to docker group](#2-add-current-user-to-docker-group)
- [3. list running container](#3-list-running-container)
- [4. list all started containers](#4-list-all-started-containers)
- [5. docker run](#5-docker-run)
- [6. docker delete containers](#6-docker-delete-containers)
- [7. docker logs - get record of container outputs](#7-docker-logs---get-record-of-container-outputs)
- [8. docker stop container](#8-docker-stop-container)
- [9. docker exec -it](#9-docker-exec--it)
- [10. Tag images](#10-tag-images)

<!-- /TOC -->

## 1. start docker desktop
systemctl --user start docker-desktop

## 2. add current user to docker group
<code class="code-block" style="font-weight:bolder">
sudo usermod -aG docker $user
</code>

## 3. list running container
docker ps

## 4. list all started containers
docker ps --all

## 5. docker run
<code>
docker create  <name>
docker start <id>
docker start -a <id>
</code>

## 6. docker delete containers
docker system prune

## 7. docker logs - get record of container outputs
``` bash
docker logs <id>
```

## 8. docker stop container
```bash
docker stop <id> -> sigterm gracefully shutdown (kill after 10 secs)
docker kill <id> -> sigkill stops immediatly
```

## 9. docker exec -it
execute additional command in a container
-i directs input in std in
-t format stuff

## 10. Tag images
[docker id]/[project]:latest
docker build -t alauhard/redis:latest .
