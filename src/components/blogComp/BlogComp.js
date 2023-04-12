import React, {useState} from 'react';
import "./BlogComp.css";

// tile for post on blog page
function BlogComp({date, title, p1, p2, p3, p4, p5, t1, t2, t3, t4, t5, t6}) {

    const [show, toggleShow] = useState(false);

    return (
        <div className="block blog">
            <p>{date}</p>
            <h3>{title}</h3>
            {show ?
                <>
                    <p>{p1}</p>
                    {(!p3 && p2) ?
                        <p>{p2}... <span className="read-more--text"
                                         onClick={() => toggleShow(false)}>lees minder</span></p>
                        :
                        (p2 && <p>{p2}</p>)
                    }

                    {(!p4 && p3) ?
                        <p>{p3}... <span className="read-more--text"
                                         onClick={() => toggleShow(false)}>lees minder</span></p>
                        :
                        (p3 && <p>{p3}</p>)
                    }

                    {(!p5 && p4) ?
                        <p>{p4}... <span className="read-more--text"
                                         onClick={() => toggleShow(false)}>lees minder</span></p>
                        :
                        (p4 && <p>{p4}</p>)
                    }

                    {p5 && <p>{p5}... <span className="read-more--text" onClick={() => toggleShow(false)}>lees minder</span></p>}
                </>
                :
                <p>{p1.slice(0, 200)}... <span className="read-more--text" onClick={() => toggleShow(true)}
                >lees meer</span></p>

            }

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