interface Props {
  onAtivo: () => void
  onErro: () => void
}

export function TmbAguardando({ onAtivo, onErro }: Props) {
  return (
    <div className="estado-panel">
      <div className="alert alert-info">
        Estamos aguardando a aprovacao da sua conta pela TMB. Voce sera notificado quando estiver pronto.
      </div>

      <div className="step">
        <div className="step-circle step-circle-done">&#10003;</div>
        <div>
          <div className="step-title">Dados enviados para a TMB</div>
          <div className="step-desc">Dados do representante legal e contrato assinado</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-waiting">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
          </svg>
        </div>
        <div>
          <div className="step-title">Aguardando aprovacao da TMB</div>
          <div className="step-desc">Esse processo acontece apenas uma vez</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">3</div>
        <div>
          <div className="step-title">Boleto parcelado habilitado</div>
          <div className="step-desc">Sera ativado automaticamente neste produto e disponivel para qualquer produto elegivel</div>
        </div>
      </div>

      <div className="btn-row" style={{ gap: 8 }}>
        <button className="btn btn-secondary" onClick={onErro}>Simular erro</button>
        <button className="btn btn-primary" onClick={onAtivo}>Simular aprovacao</button>
      </div>
    </div>
  )
}
