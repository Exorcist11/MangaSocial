import React from 'react';
import { Link } from 'react-router-dom';
const Comments = () => {
    return (
        <div>
            <div className='comments'>
                <div className='item-comments'>
                    <div className='left-comment'>
                        <div className='topic-comic'>
                            <div className='wrap-mask'>
                                <img className='mask' src='/images/Mask group.svg'></img>
                            </div>
                            <p className='name-topic'>Kimetsu No Yaiba #1</p>
                        </div>
                        <div className='viewer'>
                            <img className='ellips' src='/images/Ellipse 1.svg'></img>
                            <p className='name-user'>User Name</p>
                            <p className='add-cmt'>Has add a comment</p>
                        </div>
                        <div className='coment-user'>
                            <img className='bxs-chat' src='/images/bxs_chat.svg'></img>
                            <p className='mess-chat'>Lorem ipsum dolor sit amet consectetur ...</p>
                            <img className='ri-book' src='/images/ri_book-fill.svg' ></img>
                            <Link className='comic-name'>Kimetsu No Yaiba</Link>
                        </div>
                    </div>
                    <div className='right-comment'>
                        <div className='number'>
                            <p className='title-number'>Comment</p>
                            <p className='number-cm'>273</p>
                        </div>
                        <div className='number'>
                            <p className='title-number'>Discuss</p>
                            <p className='number-cm'>145</p>
                        </div>
                    </div>
                </div>
                <div className='item-comments'>
                    <div className='left-comment'>
                        <div className='topic-comic'>
                            <div className='wrap-mask'>
                                <img className='mask' src='/images/Mask group.svg'></img>
                            </div>
                            <p className='name-topic'>Kimetsu No Yaiba #1</p>
                        </div>
                        <div className='viewer'>
                            <img className='ellips' src='/images/Ellipse 1.svg'></img>
                            <p className='name-user'>User Name</p>
                            <p className='add-cmt'>Has add a comment</p>
                        </div>
                        <div className='coment-user'>
                            <img className='bxs-chat' src='/images/bxs_chat.svg'></img>
                            <p className='mess-chat'>Lorem ipsum dolor sit amet consectetur ...</p>
                            <img className='ri-book' src='/images/ri_book-fill.svg' ></img>
                            <Link className='comic-name'>Kimetsu No Yaiba</Link>
                        </div>
                    </div>
                    <div className='right-comment'>
                        <div className='number'>
                            <p className='title-number'>Comment</p>
                            <p className='number-cm'>273</p>
                        </div>
                        <div className='number'>
                            <p className='title-number'>Discuss</p>
                            <p className='number-cm'>145</p>
                        </div>
                    </div>
                </div>
                <div className='item-comments'>
                    <div className='left-comment'>
                        <div className='topic-comic'>
                            <div className='wrap-mask'>
                                <img className='mask' src='/images/Mask group.svg'></img>
                            </div>
                            <p className='name-topic'>Kimetsu No Yaiba #1</p>
                        </div>
                        <div className='viewer'>
                            <img className='ellips' src='/images/Ellipse 1.svg'></img>
                            <p className='name-user'>User Name</p>
                            <p className='add-cmt'>Has add a comment</p>
                        </div>
                        <div className='coment-user'>
                            <img className='bxs-chat' src='/images/bxs_chat.svg'></img>
                            <p className='mess-chat'>Lorem ipsum dolor sit amet consectetur ...</p>
                            <img className='ri-book' src='/images/ri_book-fill.svg' ></img>
                            <Link className='comic-name'>Kimetsu No Yaiba</Link>
                        </div>
                    </div>
                    <div className='right-comment'>
                        <div className='number'>
                            <p className='title-number'>Comment</p>
                            <p className='number-cm'>273</p>
                        </div>
                        <div className='number'>
                            <p className='title-number'>Discuss</p>
                            <p className='number-cm'>145</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;