import LeftMenu from './components/LeftMenu';
import NewsList from './components/NewsList';

const About = () => {
  return (
    <div className="main">
      <div className="middle-container">
        <div className="middle-left">
          <LeftMenu />
          <NewsList />
        </div>

        <div className="middle-right">
          <div className="page-status">
            <h1 className="page-title">About Us:</h1>
            <h2 className="breadcrumb">
              <a href="/" style={{ textDecorationLine: 'none', color: 'rgb(0,168,236)' }}><i>Home</i></a>/AboutUs
            </h2>
          </div>

          <div className="peragraph">
            <p>At IIP Academy, students always had the access to Major & Minor Projects in Website Development (PHP / MySQL)</p>
            <p>IIP Academy Provide best training in .NET & PHP. So that students themselves can be able to develop projects and launch them LIVE on IIP Academy Online Servers. Our Students had developed several projects like wscubetech.com. Many students get easy job placements due to their online Projects on the IIP Academy. We are only institute in Jodhpur which provides free Web Hosting to our students on our servers.</p>
            <p>Engineering & MCA students can develop any small minor projects in .NET or PHP and could extend as their Major Projects in further years.</p>
            <p>Minor Projects are really not hard to develop, as also the colleges generally are not strict in accepting the minor projects.Minor Projects can be small but it must be remarkable. Because details of Minor Projects are required to put in your Resume. And students with good minor projects can be easily placed in good companies during Campus Placements.</p>
            <p>IIP Academy Provides 45 Days Industrial Training for Engineering (B.E. / B.TECH.) Students</p>

            <h3>Why IIP Adacemy</h3>
            {["Live industrial projects", "Expert Developers", "Placement assistance.", "100% Practical", "Interview preparation sessions"].map((item, index) => (
              <div key={index} style={{ marginLeft: '20px' }}>{index + 1}. {item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
