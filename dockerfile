FROM hayd/alpine-deno:1.5.2

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache deps.ts --no-check
# install denon
CMD ["deno", "run", "-A", "--no-check", "src/mod.ts"]