import { useState } from 'react'

interface Props {
  onCancelar: () => void
  onConfirmar: () => void
  onDemorou: () => void
}

export function TmbEmPreenchimento({ onCancelar, onConfirmar, onDemorou }: Props) {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [aceite, setAceite] = useState(false)
  const [loading, setLoading] = useState(false)

  const dadosPreenchidos = nome.trim() !== '' && cpf.trim() !== ''
  const canSubmit = dadosPreenchidos && aceite

  const handleConfirmar = () => {
    setLoading(true)
    // Simula: rapido (3s) vai pro ativo, demorado (6s) cai no aguardando
    const rapido = Math.random() > 0.5
    setTimeout(() => {
      setLoading(false)
      if (rapido) {
        onConfirmar()
      } else {
        onDemorou()
      }
    }, rapido ? 3000 : 6000)
  }

  if (loading) {
    return (
      <div className="estado-panel">
        <div className="loading-overlay">
          <div className="loading-spinner" />
          <p className="loading-text">Enviando dados e aguardando aprovacao da TMB...</p>
          <p className="loading-hint">Isso pode levar alguns segundos</p>
        </div>
      </div>
    )
  }

  return (
    <div className="estado-panel">
      <p className="form-step-label">Dados do representante legal da conta</p>

      <div className="form-group">
        <label className="form-label">Nome do representante legal da conta</label>
        <input
          className="form-input"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Digite o nome completo"
        />
      </div>

      <div className="form-group">
        <label className="form-label">CPF do representante legal</label>
        <input
          className="form-input"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
          placeholder="000.000.000-00"
        />
      </div>

      {dadosPreenchidos && (
        <>
          <div className="contrato-preview">
            <h4 className="contrato-titulo">Contrato de Parceria TMB</h4>
            <div className="contrato-dados">
              <div className="contrato-campo">
                <span className="contrato-label">Representante legal:</span>
                <span className="contrato-valor">{nome}</span>
              </div>
              <div className="contrato-campo">
                <span className="contrato-label">CPF:</span>
                <span className="contrato-valor">{cpf}</span>
              </div>
            </div>
            <div className="contrato-corpo">
              <p>Pelo presente instrumento, o produtor acima identificado firma parceria com a TMB Educacao para disponibilizacao do boleto parcelado como meio de pagamento em seus produtos comercializados na plataforma Eduzz.</p>
              <p>O produtor autoriza o compartilhamento dos dados cadastrais com a TMB para fins de analise de credito e habilitacao da funcionalidade de parcelamento via boleto.</p>
            </div>
            <a href="#" className="link contrato-download" onClick={e => e.preventDefault()}>Baixar contrato completo (PDF)</a>
          </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              id="aceite"
              checked={aceite}
              onChange={e => setAceite(e.target.checked)}
            />
            <label htmlFor="aceite">
              Li e aceito o contrato de parceria com a TMB e autorizo o compartilhamento dos dados.
            </label>
          </div>
        </>
      )}

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={onCancelar}>Cancelar</button>
        <button
          className="btn btn-primary"
          disabled={!canSubmit}
          onClick={handleConfirmar}
          style={!canSubmit ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
        >
          Confirmar e enviar
        </button>
      </div>
    </div>
  )
}
