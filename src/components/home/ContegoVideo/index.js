import YouTube from 'react-youtube';

function ContegoVideo() {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (e) => e.target.pauseVideo();

  return (
    <div className="bg-gradient-to-r from-black  py-32">
      <div className="w-11/12 lg:w-10/12 xl:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="text-center text-white   mb-16 justify-start">
          <p className="text-4xl font-bold capitalize mb-3">
          We Use Contégo Jetliner

          </p>
          <p className='text-base'>
          100% Disposable For Your Pedicure Safety
          </p>
        </div>
        <div className="mx-auto relative w-full">
          {/* <Image src={contegoBanner} className="items=center" /> */}
          <YouTube videoId="sVPywJg7IlY" opts={opts} onReady={_onReady} className="" />
          {/* <iframe className='h-[420px]'
            src={`https://player.vimeo.com/video/477376080?autoplay=1&loop=1&title=0&byline=0&portrait=0`}
            frameborder="0"
            allow="allowFullScreen; picture-in-picture"
            allowfullscreen
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}

export default ContegoVideo;
