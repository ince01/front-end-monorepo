import getStaticPageProps from '@helpers/getStaticPageProps'
export { default } from '@screens/ProjectHomePage'

export async function getStaticProps({ params, query = {} }) {
  const { props } = await getStaticPageProps({ params, query })
  const { project, statusCode, title, workflows } = props
  // TODO: the response status here will be 200, not statusCode
  if (statusCode) {
    return { props }
  }
  const initialState = {
    project
  }
  return ({
    props: {
      initialState,
      workflows
    },
  revalidate: 300 })
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

