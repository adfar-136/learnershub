import React from 'react'
import Counter from './components/ErrorBoundary.js/Counter'
import ErrorBoundary from './components/ErrorBoundary.js/ErrorBoundary'
import JokeFetcher from './components/NewsApp/JokeFetcher'

export default function App() {
  return (
    <div>
      sdhgfsdgh
      <JokeFetcher/>
      <ErrorBoundary>
      <Counter/>
      <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
    </div>
  )
}
