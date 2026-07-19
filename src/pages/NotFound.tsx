import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
export function NotFound() { return <div className="not-found"><p className="eyebrow">404</p><h1>This page wandered off.</h1><p>It may have moved, been renamed, or never existed.</p><Link className="button primary" to="/"><ArrowLeft size={17} /> Back home</Link></div> }
