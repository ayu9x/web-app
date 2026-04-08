import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null)
  const [health, setHealth] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dataRes, healthRes] = await Promise.all([
          fetch('/api/data'),
          fetch('/api/health')
        ])
        const dataJson = await dataRes.json()
        const healthJson = await healthRes.json()
        setData(dataJson)
        setHealth(healthJson)
      } catch (err) {
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Dockerized Multi-Tier App</h1>
        <p className="subtitle">Automated CI/CD with GitHub Actions</p>
      </header>

      <main>
        {loading ? (
          <div className="loader">Connecting to Backend...</div>
        ) : (
          <div className="status-grid">
            <section className="card">
              <h2>Backend Status</h2>
              <div className="info">
                {data ? (
                  <>
                    <p className="success">✓ Connected</p>
                    <p><strong>Message:</strong> {data.message}</p>
                    <p><strong>Server Time:</strong> {new Date(data.timestamp).toLocaleTimeString()}</p>
                  </>
                ) : (
                  <p className="error">✗ Failed to connect to Backend</p>
                )}
              </div>
            </section>

            <section className="card">
              <h2>Database Status</h2>
              <div className="info">
                {health ? (
                  <>
                    <p className={health.status === 'OK' ? 'success' : 'error'}>
                      {health.status === 'OK' ? '✓ Connected' : '✗ Error'}
                    </p>
                    <p><strong>DB Connection:</strong> {health.database}</p>
                    {health.time && <p><strong>DB Time:</strong> {health.time}</p>}
                  </>
                ) : (
                  <p className="error">✗ Database Check Failed</p>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      <footer>
        <p>Built with Node.js, React, PostgreSQL & Nginx</p>
      </footer>
    </div>
  )
}

export default App
