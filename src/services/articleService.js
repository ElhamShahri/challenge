import http from "./httpService";

export function getArticles() {
  return http.get("/articles");
}

export function editArticle(slug,article) {
    return http.put(`/articles/${slug}`, {
        article: article,
    });
  }

  export function deleteArticle(slug) {
    return http.delete(`/articles/${slug}`);
  }

  export function getTags() {
    return http.get("/tags");
  }