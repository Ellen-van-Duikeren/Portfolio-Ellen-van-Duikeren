import React from 'react';
import "./BlogComp.css";

function BlogComp({date, title, p1, p2, p3, p4, p5, t1, t2, t3, t4, t5, t6}) {
    return (
        <div className="block blog">
            <p>{date}</p>
            <h3>{title}</h3>
            <p>{p1}</p>
            <p>{p2}</p>
            <p>{p3}</p>
            <p>{p4}</p>
            <p>{p5}</p>
                {t1 && <p className="tag">{t1}</p>}
                {t2 && <p className="tag">{t2}</p>}
                {t3 && <p className="tag">{t3}</p>}
                {t4 && <p className="tag">{t4}</p>}
                {t5 && <p className="tag">{t5}</p>}
                {t6 && <p className="tag">{t6}</p>}
        </div>
    );
}

export default BlogComp;