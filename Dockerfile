FROM grafana/k6:latest
WORKDIR /k6
COPY . .
CMD ["run", "tests/createOfflineOrderTest.js"]