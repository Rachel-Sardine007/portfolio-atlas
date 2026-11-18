import { Link } from 'react-router-dom'
export function NotFoundPage() { return <div className="page empty-page"><span className="eyebrow">404 · Uncharted waters</span><h1>This route isn't on the map.</h1><Link className="button primary" to="/">Return to The Atlas</Link></div> }
