import LeftMenu from './components/LeftMenu';
import NewsList from './components/NewsList';
import courseData from "./data/courseData";

const Courses = () => {
  return (
    <div className="main">
      <div className="middle-containercourses">
        <div className="middle-left">
          <LeftMenu />
          <NewsList />
        </div>

        <div className="middle-right">
          <div className="page-status">
            <h1 className="page-title">Courses</h1>
            <h2 className="breadcrumb">
              <a href="/" style={{ textDecorationLine: 'none', color: 'rgb(0,168,236)' }}><i>Home</i></a>/Courses
            </h2>
          </div>

          <div className="cs1">
            {Array.from({ length: Math.ceil(courseData.length / 3) }, (_, rowIndex) => (
              <div className="cs2" key={rowIndex}>
                {courseData
                  .slice(rowIndex * 3, rowIndex * 3 + 3)
                  .map((course, idx) => (
                    <div className="cs" key={idx}>
                      <div className={`cs${(rowIndex * 3 + idx + 1)}image`}>
                        <div className="img-border-courses">
                          <div className="csimagess">
                            <img src={course.img} alt={course.title} height="52px" width="73px" />
                          </div>
                        </div>
                      </div>
                      <div className={`cs${(rowIndex * 3 + idx + 1)}text`}>
                        <h3 style={{ color: course.color || 'black' }}>{course.title}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
