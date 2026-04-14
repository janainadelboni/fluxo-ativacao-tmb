interface Props {
  onCorrigir: () => void
}

export function TmbErro({ onCorrigir }: Props) {
  return (
    <div className="estado-panel">
      <div className="alert alert-error">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <div className="step">
        <div className="step-circle step-circle-error">!</div>
        <div>
          <div className="step-title">Cadastro do produtor recusado</div>
          <div className="step-desc">A TMB retornou erro. Corrija os dados e reenvie, ou entre em contato com o suporte.</div>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-secondary">Falar com suporte</button>
        <button className="btn btn-primary" onClick={onCorrigir}>Corrigir dados</button>
      </div>
    </div>
  )
}
