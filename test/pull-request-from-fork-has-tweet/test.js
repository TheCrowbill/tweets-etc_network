  .get("/repos/twitter-together/action/pulls/123/files")
  .get("/repos/twitter-together/action/pulls/123")
    `diff --git a/tweets/hello-world.tweet b/tweets/hello-world.tweet
  tap.equal(code, 0);
  tap.same(nock.pendingMocks(), []);