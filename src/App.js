import './App.css';
import Header from './components/Header.js'
import Movies from './components/Movies.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <>
      <Header />
      <div className="container grid grid-three-column d-flex  mb-5" id="container1">
        <div className="grid1">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4306/674306-h"
            title="Iron Man"
            link="https://www.hotstar.com/in/movies/iron-man/1660000038"
          />
        </div>

        <div className="grid2">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4570/674570-h"
            title="Iton Man 2"
            link="https://www.hotstar.com/in/movies/iron-man-2/1660000039"
          />
        </div>

        <div className="grid3">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/35/1370035-i-933c1544afc0"
            title="Iron Man 3"
            link="https://www.hotstar.com/in/movies/iron-man-3/1660000042"
          />
        </div>
      </div>

      <div className="container d-flex mb-5 grid grid-three-column">
        <div className="grid1">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3634/1373634-i-202aea42c71f"
            title="Spider-Man"
            link="https://www.hotstar.com/in/paywall?content_id=1221006195&content_title=Spider-Man&content_type=MOVIE&failed_pc_entitlement_context=%7B%22playback_list_platforms%22%3A%22web%22%2C%22tags%22%3A%22vip%2Cpaid%22%7D&failed_pc_entitlement_required=%5B%22tags%22%2C%22playback_list_platforms%22%5D&filters=content_type%3Dmovie&is_content_paid=true"
          />
        </div>

        <div className="grid2">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9389/1369389-i-47abe651fff0"
            title="Ant-Man"
            link="https://www.hotstar.com/in/paywall?content_id=1260018141&content_title=Ant-Man&content_type=MOVIE&failed_pc_entitlement_context=%7B%22playback_list_platforms%22%3A%22web%22%2C%22tags%22%3A%22vip%2Cpaid%22%7D&failed_pc_entitlement_required=%5B%22tags%22%2C%22playback_list_platforms%22%5D&filters=content_type%3Dmovie&is_content_paid=true"
          />
        </div>

        <div className="grid3">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2380/1282380-h-b512a4804d55"
            title="Spider Man 2"
            link="https://www.hotstar.com/in/explore?search_query=spider+man+2"
          />
        </div>
      </div>

      <div className="container d-flex grid grid-three-column mb-5">
        <div className="grid1">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9612/1369612-i-f6fe00a90867"
            title="HITMAN"
            link="https://www.hotstar.com/in/movies/hitman/1770000936"
          />
        </div>

        <div className="grid2">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4458/674458-h"
            title="Captain America: Civil War"
            link="https://www.hotstar.com/in/movies/captain-america-civil-war/1260016768"
          />
        </div>

        <div className="grid3">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/1218/1541218-i-98d4e7b2396e"
            title="Lightening Thief"
            link="https://www.hotstar.com/in/movies/percy-jackson-and-the-olympians-the-lightning-thief/1770001604"
          />
        </div>
      </div>

      <div className="container d-flex mb-5 grid grid-three-column">
        <div className="grid1">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2138/1572138-h-a6e3142338d5"
            title="1920: Horros of Heart"
            link="https://www.hotstar.com/in/movies/1920-horrors-of-the-heart/1260147883"
          />
        </div>

        <div className="grid2">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3111/1593111-h-4355f3781a35"
            title="Bhootchakra Pvt Ltd."
            link="https://www.hotstar.com/in/movies/bhootchakra-pvt-ltd/1260152857"
          />
        </div>

        <div className="grid3">
          <Movies
            img="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7317/417317-h"
            title="AATA- The Game of Fear"
            link="https://www.hotstar.com/in/movies/aata-the-game-of-fear/1000234899"
          />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>

    </>
  );
}

export default App;
