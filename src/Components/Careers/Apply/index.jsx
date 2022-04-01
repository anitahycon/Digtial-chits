import DropDown from "../../components/DropDown";
import Footer from "../../components/Footer";
import Input from "../../components/Input";

const Apply = () => {
  const phone = ["IND (+91)", "UK(+44)", "USA(+233)"];
  return (
    <div className="wrapper">
      <div className="content">
        <div className="chit-info-div mt-40">
          <p className="mychits-title1 orange-txt font-s-34 font-w-700 left-txt ">
            Position Name
          </p>
          <div className="w-100 mt-40">
            <p className="orange-txt font-w-700 font-s-28">Overview</p>
            <p className="font-s-24 mt-13 lght-blc-txt line-ht-34">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
          <div className="w-100 mt-40">
            <p className="orange-txt font-w-700 font-s-28">Job Description</p>
            <ul className="mt-13 font-s-24 lght-blc-txt ml-20">
              <li>Amet minim mollit non deserunt ullamco est sit</li>
              <li>Amet minim mollit non deserunt ullamco est sit</li>
              <li>Amet minim mollit non deserunt ullamco est sit</li>
              <li>Amet minim mollit non deserunt ullamco est sit</li>
            </ul>
          </div>
          <div className="w-100 mt-40">
            <p className="orange-txt font-w-700 font-s-28">Apply</p>
            <form>
              <Input
                category="text"
                placeholder="Full Name"
                borderColor="#1B9CFC"
                onUpdate={() => {}}
              />
              <Input
                category="email"
                placeholder="Email Address"
                borderColor="#1B9CFC"
                onUpdate={() => {}}
              />
              <div className="d-flex flex-1 mt-n1">
                <div className="flex-2">
                  <DropDown
                    title="Exp Month"
                    list={phone}
                    onChageAction={(e) => {}}
                  />
                </div>
                <div className="flex-1 ml-20">
                  <Input
                    category="number"
                    placeholder="Mobile Number"
                    borderColor="#1B9CFC"
                    onUpdate={() => {}}
                  />
                </div>
              </div>
              <div>
                  <input type="file" className="pinCodeBorder w-100" />
                 
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
