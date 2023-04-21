import React from 'react';
import BlogComp from "../../../components/blogComp/BlogComp";
import AvatarEllen from "../../../assets/AvatarEllen.jpg";

const BlogFavicon = () => {
    return (
        <BlogComp
            date="8 april 2023"
            title="Over favicon, title en avatars"
            src={AvatarEllen}
            width="40%"
            p1="Vandaag heb ik een avatar gemaakt, omdat ik bijna nooit leuk op een foto sta. Die avatars zijn hier namelijk wel keigoed in en je moet gebruik maken van je talenten, toch? Ik  heb de app avatoon gebruikt. Simpel in gebruik, maar ik werd ook simpel van de veeeele adds. Bij alles wat ik deed kreeg ik er gratis een add bij van 30 seconden ofzo. Ach ja, je moet er wat voor over hebben."
            p2="Nog een quick win. Ik heb de favicon en de titel van React in de browser tab vervangen. De favicon is dat plaatje dat je op je tab ziet staan bovenin je scherm, naast de titel. Dit is echt een klusje van 5 minuten. In je map public moet je de favicon.ico vervangen door jouw plaatje en de titel kan je aanpassen in de index.html bij title."
            t1="avatar"
            t2="title"
            t3="favicon"
        />
    );
};

export default BlogFavicon;