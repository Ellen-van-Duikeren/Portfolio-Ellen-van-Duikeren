import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";

const BlogBlogArchive = () => {
    return (
      <BlogComp
          date="17 april 2023"
          title="Opschonen code in blog.js"
          toPage="/blog"
          p1="Omdat ik natuurlijk in het begin nog niet zoveel posts had in mijn blog, had ik ze gewoon in mijn blog.js staan. Maar nu gaat dat veel ruimte in beslag nemen en moet ik steeds verder naar beneden scrollen om bij mijn archief en ideeën te komen. Daarom heb ik van elke post een eigen component gemaakt. De code in mijn blog is weer lekker overzichtelijk."
          p2="Daarnaast heb ik een archief gemaakt van de posts. Vooralsnog heb ik deze handmatig hierin gezet. Het wordt weer een leuk klusje om dit dynamisch te maken. Als je op één van de posts in het archief klikt, ga je direct naar die post toe. Wel zo handig."
          p3="Tenslotte heb ik nog een react-icon met een pijl achter de tags toegevoegd. Als je op de pijl klikt, scroll je in één keer weer helemaal naar het begin van de blog pagina. Het was weer zoeken, want ik ben de weg even kwijt wanneer je navigate, link to, navlink, enzovoorts gebruikt. Maar linken op dezelfde pagina kan je in React gewoon maken met een id='name' en een <a href='#name'>Name</a>."
          t1="blog"
          t2="archive"
          t3="component"
          t4="link"


      />
    );
};

export default BlogBlogArchive;