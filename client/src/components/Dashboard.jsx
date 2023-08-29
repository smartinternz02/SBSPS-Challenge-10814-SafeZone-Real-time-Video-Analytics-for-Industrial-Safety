import '../css/Dashboard.css'

function Dashboard() {

    return (

            <div>
                <header className='dashboard-header'>Live survilience</header>
                <div className='video-box'>

                    <div className='LocDateMenu'>{/* insert location and date selector*/}</div>
                    <div className='video-subbox'>{/* insert video */}</div>
                    <div className='connection'>12 Monitors Connected</div>
                
                </div>

                <header className='summary-header'>Summary</header>

                <div className='summary'>

                    <div className='box1'>

                    </div>
                    <div className='box2'>
                        
                    </div>
                </div>
                

            </div>
    );
}

export default Dashboard;