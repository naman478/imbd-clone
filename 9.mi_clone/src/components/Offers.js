import React from 'react'

function Offers() {

   let offer={ "offer": [
        {
          "url": "https://in.event.mi.com/in/offer-with-mi",
          "image": "https://i02.appmifile.com/31_operator_in/25/04/2021/37529e4f2964c9b26a671172950096ae.jpg?width=398&height=230"
        },
        {
          "url": "https://in.event.mi.com/in/work-from-home-essentials",
          "image": "https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230"
        },
        {
          "url": "https://xiaomi.giveindia.org/",
          "image": "https://i02.appmifile.com/761_operator_in/27/04/2021/09489d6a77f96111372718a551d2799d.png?width=398&height=230"
        }
      ]
    };

    let offerStyle={
        display:"flex",
        flexWrap:"wrap",
        padding:"15px",
        paddingBottom:"0px",
        gap:"18px",
        transition: "all 0.5s",
        marginTop:"20px"
    }

  return (
    <div style={offerStyle}>
        <div className="offerLink">
            <a href={offer.offer[0].url}><img src={offer.offer[0].image}/></a>
        </div>
        <div className="offerLink">
            <a href={offer.offer[1].url}><img src={offer.offer[1].image}/></a>
        </div>
        <div className="offerLink">
            <a href={offer.offer[2].url}><img src={offer.offer[2].image}/></a>
        </div>
    </div>
  )
}

export default Offers