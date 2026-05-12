import { useState } from 'react'

interface Props {
  onCancelar: () => void
  onConfirmar: () => void
  onDemorou: () => void
}

type Vinculo = '' | 'socio' | 'procurador'

export function TmbEmPreenchimento({ onCancelar, onConfirmar, onDemorou }: Props) {
  const [vinculo, setVinculo] = useState<Vinculo>('')
  const [procuracaoArquivo, setProcuracaoArquivo] = useState<File | null>(null)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [aceiteContrato, setAceiteContrato] = useState(false)
  const [aceiteVeracidade, setAceiteVeracidade] = useState(false)
  const [loading, setLoading] = useState(false)

  const nomeCompleto = nome.trim().split(/\s+/).filter(Boolean).length >= 2
  const dadosPreenchidos = nome.trim() !== '' && cpf.trim() !== ''
  const vinculoOk = vinculo === 'socio' || (vinculo === 'procurador' && procuracaoArquivo !== null)
  const canSubmit = vinculoOk && dadosPreenchidos && aceiteContrato && aceiteVeracidade

  const handleConfirmar = () => {
    setLoading(true)
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
      <div className="alert alert-info">
        <strong>Analise de credito pela TMB.</strong> Os dados preenchidos abaixo sao enviados para a TMB, parceira responsavel pela analise e aprovacao do seu cadastro de boleto parcelado. A Eduzz nao participa dessa decisao.
      </div>

      <p className="form-step-label">Vinculo com a empresa</p>

      <div className="form-group">
        <label className="radio-row">
          <input
            type="radio"
            name="vinculo"
            value="socio"
            checked={vinculo === 'socio'}
            onChange={() => setVinculo('socio')}
          />
          <span>
            <span className="radio-title">Sou socio da empresa</span>
            <span className="radio-desc">Estou no contrato social da empresa.</span>
          </span>
        </label>

        <label className="radio-row">
          <input
            type="radio"
            name="vinculo"
            value="procurador"
            checked={vinculo === 'procurador'}
            onChange={() => setVinculo('procurador')}
          />
          <span>
            <span className="radio-title">Sou procurador da empresa</span>
            <span className="radio-desc">Nao estou no contrato social. E obrigatorio anexar a procuracao.</span>
          </span>
        </label>
      </div>

      {vinculo === 'procurador' && (
        <div className="form-group">
          <label className="form-label">Procuracao (obrigatorio)</label>
          <div className="file-upload">
            <input
              type="file"
              id="procuracao"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={e => setProcuracaoArquivo(e.target.files?.[0] ?? null)}
            />
            <label htmlFor="procuracao" className="file-upload-label">
              {procuracaoArquivo ? procuracaoArquivo.name : 'Selecionar arquivo (PDF, JPG, PNG)'}
            </label>
          </div>
          <p className="form-hint">A TMB e responsavel pela verificacao do documento anexado.</p>
        </div>
      )}

      {vinculo !== '' && (
        <>
          <div className="divider" />
          <p className="form-step-label">Dados do representante legal da conta</p>

          <div className="form-group">
            <label className="form-label">Nome completo do representante legal</label>
            <input
              className="form-input"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Ex.: Maria Silva Santos"
            />
            <p className={`form-hint ${nome.trim() !== '' && !nomeCompleto ? 'form-hint-warn' : ''}`}>
              {nome.trim() !== '' && !nomeCompleto
                ? 'Recomendamos preencher o nome completo, como aparece no documento.'
                : 'Informe o nome completo, exatamente como aparece no documento.'}
            </p>
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
        </>
      )}

      {dadosPreenchidos && vinculoOk && (
        <>
          <div className="contrato-preview">
            <h4 className="contrato-titulo">Contrato de Parceria TMB e Eduzz</h4>
            <div className="contrato-dados">
              <div className="contrato-campo">
                <span className="contrato-label">Representante legal:</span>
                <span className="contrato-valor">{nome}</span>
              </div>
              <div className="contrato-campo">
                <span className="contrato-label">CPF:</span>
                <span className="contrato-valor">{cpf}</span>
              </div>
              <div className="contrato-campo">
                <span className="contrato-label">Vinculo:</span>
                <span className="contrato-valor">{vinculo === 'socio' ? 'Socio' : 'Procurador'}</span>
              </div>
            </div>
            <div className="contrato-corpo">
              <p>Pelo presente instrumento, o produtor acima identificado firma contrato com a TMB Educacao e a Eduzz para disponibilizacao do boleto parcelado como meio de pagamento em seus produtos comercializados na plataforma Eduzz.</p>
              <p>O produtor autoriza o compartilhamento dos dados cadastrais com a TMB para fins de analise de credito e habilitacao da funcionalidade de parcelamento via boleto.</p>
            </div>
            <a href="#" className="link contrato-download" onClick={e => e.preventDefault()}>Baixar contrato completo (PDF)</a>
          </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              id="aceiteContrato"
              checked={aceiteContrato}
              onChange={e => setAceiteContrato(e.target.checked)}
            />
            <label htmlFor="aceiteContrato">
              Li e aceito o contrato de parceria com a <strong>TMB e Eduzz</strong> e autorizo o compartilhamento dos dados.
            </label>
          </div>

          <div className="checkbox-row">
            <input
              type="checkbox"
              id="aceiteVeracidade"
              checked={aceiteVeracidade}
              onChange={e => setAceiteVeracidade(e.target.checked)}
            />
            <label htmlFor="aceiteVeracidade">
              Declaro veracidade nas informacoes descritas (Nome e CPF) e ser o responsavel legal pela empresa.
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
          Confirmar e enviar para analise da TMB
        </button>
      </div>
    </div>
  )
}
