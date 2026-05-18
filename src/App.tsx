import { useState } from 'react'
import { TmbDropdownCard } from './components/TmbDropdownCard'
import './styles/global.css'

export type TmbStatus = 'nao-configurado' | 'em-preenchimento' | 'aguardando' | 'ativo' | 'erro'
export type Cadastro360Status = 'preenchido' | 'pendente'

export type Cadastro360Data = {
  nome: string
  cpf: string
}

const CADASTRO_360_MOCK: Cadastro360Data = {
  nome: 'Maria Silva Santos',
  cpf: '123.456.789-00',
}

export default function App() {
  const [status, setStatus] = useState<TmbStatus>('nao-configurado')
  const [showCheckout, setShowCheckout] = useState(true)
  const [cadastro360, setCadastro360] = useState<Cadastro360Status>('preenchido')

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
                cadastro360Status={cadastro360}
                cadastro360Data={CADASTRO_360_MOCK}
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
      <div className="demo-controls-row">
        <span className="demo-controls-sublabel">Cadastro 360:</span>
        {(['preenchido', 'pendente'] as Cadastro360Status[]).map(s => (
          <button
            key={s}
            className={`demo-controls-btn ${cadastro360 === s ? 'demo-controls-btn-active' : ''}`}
            onClick={() => setCadastro360(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}
