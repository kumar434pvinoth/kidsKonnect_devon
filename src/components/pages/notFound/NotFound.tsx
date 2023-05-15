import './NotFound.css';

export default function NotFound() {
    return  (
        <>
            <div className='prd-list-main-wrapper'>
                <div className="notfound">
                    <h3>Oops... we didn't find anything that matches this search </h3>
                    <p>Try search for something more general, change the filters or check for spelling mistakes</p>
                    <img src="https://static.vecteezy.com/system/resources/previews/014/814/289/original/creatively-designed-flat-conceptual-icon-of-not-exist-vector.jpg" alt="Not Found image" />
                </div>
            </div>
        </>
    )
}
