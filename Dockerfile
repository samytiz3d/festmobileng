FROM node:22-bookworm-slim

WORKDIR /app

# Give the built-in non-root 'node' user a writable HOME and cache dirs
RUN mkdir -p /app/.home && chown -R node:node /app

USER node
ENV HOME=/app/.home

# node_modules installed at runtime via compose command (bind-mount overlay, rule 3b)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
