import './Topbar.css';
export default function Topbar()
{
    return(
        <>
            <div className="topbar">
                <div className='img-span'>
                    <img src="nalco-logo.png" alt="" style={{height:"50px",width:"250px"}}/>
                    <span>A Navratna CPSE | A Govt. of India Enterprise</span>
                </div>
            </div>
        </>
    );
}