import { useState } from 'react'

interface Props {
  onCancelar: () => void
  onConfirmar: () => void
}

export function TmbEmPreenchimento({ onCancelar, onConfirmar }: Props) {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [aceite, setAceite] = useState(false)

  const canSubmit = nome.trim() !== '' && cpf.trim() !== '' && aceite

  return (
    <div className="estado-panel">
      <p className="form-step-label">Etapa 1 de 2 — Dados do representante legal</p>

      <div className="form-group">
        <label className="form-label">Nome completo do representante legal</label>
        <input
          className="form-input"
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Digite o nome completo"
        />
      </div>

      <div className="form-group">
        <label className="form-label">CPF do representante</label>
        <input
          className="form-input"
          value={cpf}
          onChange={e => setCpf(e.target.value)}
          placeholder="000.000.000-00"
        />
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

      <div className="alert alert-warning">
        Atencao: a taxa da Eduzz incide sobre todas as parcelas da venda, nao apenas na primeira. Certifique-se disso antes de confirmar.
      </div>

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={onCancelar}>Cancelar</button>
        <button
          className="btn btn-primary"
          disabled={!canSubmit}
          onClick={onConfirmar}
          style={!canSubmit ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
        >
          Confirmar e enviar
        </button>
      </div>
    </div>
  )
}
