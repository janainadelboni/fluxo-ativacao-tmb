import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { ProductHeader } from './components/ProductHeader'
import { PaymentMethods } from './components/PaymentMethods'
import './styles/global.css'

export type TmbStatus = 'nao-configurado' | 'em-preenchimento' | 'aguardando' | 'ativo' | 'erro'

export default function App() {
  const [status, setStatus] = useState<TmbStatus>('nao-configurado')
  const [showCheckout, setShowCheckout] = useState(true)

  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="content">
          <ProductHeader />
          <div className="tab-bar">
            <span className="tab">Geral</span>
            <span className="tab">Vendas</span>
            <span className="tab active">Meios de pagamento</span>
            <span className="tab">Parceiros</span>
            <span className="tab">Afiliados</span>
            <span className="tab">Entrega online</span>
            <span className="tab">Entrega fisica</span>
            <span className="tab">Recuperacao de vendas</span>
            <span className="tab">Avancado</span>
          </div>
          <div className="alert-info-top">
            <span className="alert-info-icon">&#9432;</span>
            Ativamos nossas ferramentas para te ajudar a converter mais. Voce pode desativa-las quando quiser, mas antes, confira os dados e impactos que levantamos para apoiar sua decisao.
          </div>
          <div className="card-section">
            <h3 className="section-title">Meios de pagamento e checkout</h3>
            <PaymentMethods
              tmbStatus={status}
              setTmbStatus={setStatus}
              showCheckout={showCheckout}
              onToggleCheckout={() => setShowCheckout(v => !v)}
            />
          </div>

          <div className="save-bar">
            <button className="btn-save">
              <span className="btn-save-icon">&#128190;</span> Salvar
            </button>
          </div>

          <div className="debug-bar">
            <span className="debug-label">Simular estado:</span>
            {(['nao-configurado', 'em-preenchimento', 'aguardando', 'ativo', 'erro'] as TmbStatus[]).map(s => (
              <button
                key={s}
                className={`debug-btn ${status === s ? 'debug-btn-active' : ''}`}
                onClick={() => setStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
