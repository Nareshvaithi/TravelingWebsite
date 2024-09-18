import React from 'react'

export const Location = () => {
  return (
    <div>
        <div>
            <div className="container pb-10">
                <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Location to visit</h1>
                <div className='rounded-xl'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.982255296723!2d79.75050782219124!3d11.894930308626243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536111e37a8921%3A0x18ccfabffd2847d4!2sSelva%20Nagar%20Main%20Road!5e0!3m2!1sen!2sin!4v1726641928973!5m2!1sen!2sin" width="100%" height="360" allowFullScreen="" style={{borderRadius:"20px"}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}
