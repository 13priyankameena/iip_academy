import LeftMenu from './components/LeftMenu';
import NewsList from './components/NewsList';
import EnquiryForm from './components/EnquiryForm';
import './App.css';

const Enquiry = () => {
  return (
    <div className="main">
      <div className="middle-container">
        <div className="middle-left">
          <LeftMenu />
          <NewsList />
        </div>

        <div className="middle-right">
          <div className="page-status">
            <h1 className="page-title">Enquiry</h1>
            <h2 className="breadcrumb">
              <a href="/" style={{ textDecorationLine: 'none', color: 'rgb(0,168,236)' }}><i>Home</i></a>/Enquiry
            </h2>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
