import { connect } from "react-redux";

import { HomePage } from "../components/HomePage/HomePage";

// export default function index() {
//   return <HomePage />;
// }

export default connect((state) => state)(HomePage);
