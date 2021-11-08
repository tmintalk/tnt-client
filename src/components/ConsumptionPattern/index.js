import './index.scss'

const ConsumptionPattern = () => {

  return (
    <>
    {/* <h3> 소비패턴 할 차례야</h3> */}
    <div className="consumption-pattern-container"> 
      <div className="title"> Consumption Pattern </div>
      <div className="pattern-list-container">
        <div className="first-pattern">
          <div className="first-character"></div>
          <div className="first-content-container">
            <div className="first-comment"> 지름신의 수혜를 받는 자 </div>
            <div className="first-title"> MU신사 VIP </div>
          </div>
        </div>
        <div className="partition"></div>
        <div className="second-pattern">
          <div className="second-character"></div>
          <div className="second-content-container">
            <div className="second-comment"> 스타벅스 </div>
            <div className="second-title"> 별다방 단골손님 </div>
          </div>
        </div>
      </div>
    </div>
    
   
   </>
  )
}

export default ConsumptionPattern;