interface Props {
  onAtivo: () => void
}

export function TmbAprovado({ onAtivo }: Props) {
  return (
    <div className="estado-panel">
      <div className="alert alert-info">
        Conta aprovada pela TMB. Estamos ativando o boleto parcelado neste produto.
      </div>

      <div className="step">
        <div className="step-circle step-circle-done">&#10003;</div>
        <div>
          <div className="step-title">Dados enviados para a TMB</div>
          <div className="step-desc">Dados do representante legal e contrato assinado</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-done">&#10003;</div>
        <div>
          <div className="step-title">Conta aprovada pela TMB</div>
          <div className="step-desc">Cadastro do produtor confirmado</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-waiting">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
          </svg>
        </div>
        <div>
          <div className="step-title">Ativando boleto parcelado</div>
          <div className="step-desc">Habilitando no checkout deste produto</div>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-primary" onClick={onAtivo}>Simular ativacao</button>
      </div>
    </div>
  )
}
