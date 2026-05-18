import { useState } from 'react'
import { TmbDropdownCard } from './components/TmbDropdownCard'
import './styles/global.css'

export type TmbStatus = 'nao-configurado' | 'em-preenchimento' | 'aguardando' | 'ativo' | 'erro'

export default function App() {
  const [status, setStatus] = useState<TmbStatus>('nao-configurado')
  const [showCheckout, setShowCheckout] = useState(true)

  return (
    <>
    <div className="layout">
      <div className="main">
        <div className="content">
          <div className="card-section">
            <div className="tmb-section">
              <h4 className="subsection-title">Boleto parcelado</h4>
              <TmbDropdownCard
                status={status}
                setStatus={setStatus}
                showCheckout={showCheckout}
                onToggleCheckout={() => setShowCheckout(v => !v)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* ============================================================ */}
    {/* Controles de demo — NÃO FAZEM PARTE DA INTERFACE              */}
    {/* Apenas para simular estados durante a apresentação/handoff.    */}
    {/* ============================================================ */}
    <div className="demo-controls" aria-hidden>
      <span className="demo-controls-label">
        ⚙️ Controles de demo — não fazem parte da interface
      </span>
      <div className="demo-controls-row">
        <span className="demo-controls-sublabel">Simular estado:</span>
        {(['nao-configurado', 'em-preenchimento', 'aguardando', 'ativo', 'erro'] as TmbStatus[]).map(s => (
          <button
            key={s}
            className={`demo-controls-btn ${status === s ? 'demo-controls-btn-active' : ''}`}
            onClick={() => setStatus(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}
