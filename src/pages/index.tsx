import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="CharGraph Dashboard für Anwender"
      description="Einfache Anleitung zur Bedienung des CharGraph Dashboards">
      <main style={{padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
          CharGraph - Dokumentation für Anwender
        </h1>
        <p style={{fontSize: '1.2rem', color: '#666', marginBottom: '2rem'}}>
          Willkommen! Hier finden Sie eine Schritt-für-Schritt-Anleitung zur 
          einfachen Bedienung des CharGraph Dashboards.
        </p>

        <div style={{display: 'grid', gap: '1.5rem', marginTop: '3rem'}}>
          <div style={{padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px'}}>
            <h3>🚀 Erste Schritte</h3>
            <p>Lernen Sie die Grundlagen kennen und starten Sie mit CharGraph</p>
            <Link to="/docs/erste-schritte" style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#25c2a0',
              color: 'white',
              borderRadius: '5px',
              textDecoration: 'none',
              marginTop: '0.5rem'
            }}>
              Los geht's →
            </Link>
          </div>

          <div style={{padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px'}}>
            <h3>📊 Dashboard-Funktionen</h3>
            <p>Übersicht über alle wichtigen Funktionen des Dashboards</p>
            <Link to="docs/CharGraph Portal/overview_portal" style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#25c2a0',
              color: 'white',
              borderRadius: '5px',
              textDecoration: 'none',
              marginTop: '0.5rem'
            }}>
              Funktionen ansehen →
            </Link>
          </div>

          <div style={{padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px'}}>
            <h3>❓ Häufige Fragen</h3>
            <p>Antworten auf die am häufigsten gestellten Fragen</p>
            <Link to="/docs/faq/intro/" style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: '#25c2a0',
              color: 'white',
              borderRadius: '5px',
              textDecoration: 'none',
              marginTop: '0.5rem'
            }}>
              FAQ öffnen →
            </Link>
          </div>
        </div>
      

      </main>
    </Layout>
  );
}