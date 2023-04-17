import React, {useState} from 'react';
import "./BlogComp.css";
import {SlArrowUpCircle} from "react-icons/sl";

// tile for post on blog page
function BlogComp({date, title, src1, alt, p1, p2, p3, p4, p5, t1, t2, t3, t4, t5, t6}) {

    const [show, toggleShow] = useState(false);

    return (
        <div className="block blog" id="toTopOfPage">
            <p>{date}</p>
            <h3 className="margin-top1">{title}</h3>
            {src1 && <img src={src1} className="blog__image margin-bottom1" alt={alt}/>}
            {show ?
                <>
                    <p className="margin-bottom1">{p1}</p>

                    {(!p3 && p2) ?
                        <p className="margin-bottom1">{p2} <span className="read-more--text"
                                                                 onClick={() => toggleShow(false)}>lees minder</span>
                        </p>
                        :
                        (p2 && <p className="margin-bottom1">{p2}</p>)
                    }

                    {(!p4 && p3) ?
                        <p className="margin-bottom1">{p3} <span className="read-more--text"
                                                                 onClick={() => toggleShow(false)}>lees minder</span>
                        </p>
                        :
                        (p3 && <p className="margin-bottom1">{p3}</p>)
                    }

                    {(!p5 && p4) ?
                        <p className="margin-bottom1">{p4} <span className="read-more--text"
                                                                 onClick={() => toggleShow(false)}>lees minder</span>
                        </p>
                        :
                        (p4 && <p className="margin-bottom1">{p4}</p>)
                    }

                    {p5 && <p className="margin-bottom1">{p5} <span className="read-more--text"
                                                                    onClick={() => toggleShow(false)}>lees minder</span>
                    </p>}
                </>
                :
                <p>{p1.slice(0, 200)}... <span className="read-more--text" onClick={() => toggleShow(true)}
                >lees meer</span></p>
            }


            <div className="tags margin-top1">
                {t1 && <p className="tag">{t1}</p>}
                {t2 && <p className="tag">{t2}</p>}
                {t3 && <p className="tag">{t3}</p>}
                {t4 && <p className="tag">{t4}</p>}
                {t5 && <p className="tag">{t5}</p>}
                {t6 && <p className="tag">{t6}</p>}
                <a href="#toTopOfPage"><SlArrowUpCircle size="1.5em" color="var(--brown)"/></a>
            </div>

        </div>
    );
}

export default BlogComp;