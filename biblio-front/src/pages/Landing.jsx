import React from 'react'

const Landing = () => {
  return (
    <div className="landing">
      <div className="  flex-1 xl:p-36 pt-20 padding-x">
        <h1 className="landing__title">Bibliophilia</h1>
        <p className="landing__subtitle">Venez voyager à travers d'autres mondes</p>
        {/* <CustomButton
          title="Découvrir"
          containerStyle="bg-emerald-800 text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
      </div>
      <div className="landing__image-container">
        <div className="landing__image">
          {/* <Image
            src="/eni.png"
            alt="eni image"
            fill
            className="object-contain"
          /> */}
        </div>
        {/* <div className="landing__image-overlay"></div> */}
      </div>
    </div>
  )
}

export default Landing
