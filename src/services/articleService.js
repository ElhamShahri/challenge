import http from "./httpService";

export function getArticles(page) {
  return http.get("/articles");
  // return http.get(`/articles/page/${2}`);
}

export function editArticle( article) {
  console.log(`/articles/${article.slug}`)
  
  return http.put(`/articles/${article.slug}`, {
    article: article,
  });
}

export function deleteArticle(slug) {
  return http.delete(`/articles/${slug}`);
}

export function createArticle(article) {
  return http.post("/articles", { article: article });
}

export function getTags() {
  return http.get("/tags");
}
