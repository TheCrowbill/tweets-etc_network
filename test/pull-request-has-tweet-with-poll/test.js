  .get("/repos/twitter-together/action/pulls/123/files")
  .get("/repos/twitter-together/action/pulls/123")
    `diff --git a/tweets/hello-world.tweet b/tweets/hello-world.tweet
@@ -0,0 +1,6 @@
  .post("/repos/twitter-together/action/check-runs", (body) => {
    tap.same(body.output, {
  tap.equal(code, 0);
  tap.same(nock.pendingMocks(), []);