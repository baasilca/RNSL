
export const queryRecentNews = 
     `
    query allNews(
        $where : String,
        $limit: Int,
        $sort: String
    ){
     allNews( 
        where : $where,
     limit: $limit,
     sort: $sort
     ) {
       docs {
         id
         title
         slug
         summary
         isTrending
         image {
           alt
           url
           height
           width
         }
         categoryId {
           name
           slug
         }
        subCategoryId {
          name
          slug
        }
         publishedAt
         status
         tagIds {
            name
            slug
         }
       }
     }
   }
  `