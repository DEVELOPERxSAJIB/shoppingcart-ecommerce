import { Helmet } from "react-helmet"

const MetaData = ({ title }) => {

  return (

    <Helmet>

        <title>{`${title} - Shopping Cart`}</title>


    </Helmet>

    )
}

export default MetaData