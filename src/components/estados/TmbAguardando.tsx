interface Props {
  onAtivo: () => void
  onErro: () => void
}

export function TmbAguardando({ onAtivo, onErro }: Props) {
  return (
    <div className="estado-panel">
      <div className="alert alert-info">
        Aguardando confirmacao da TMB. Seus dados foram enviados e o cadastro esta sendo processado. Voce sera notificado quando estiver pronto.
      </div>

      <div className="step">
        <div className="step-circle step-circle-waiting">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2"/>
          </svg>
        </div>
        <div>
          <div className="step-title">Cadastro do produtor enviado</div>
          <div className="step-desc">Dados enviados. Aguardando aprovacao da TMB.</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">2</div>
        <div>
          <div className="step-title">Ativar funcionalidade</div>
          <div className="step-desc">Apos a aprovacao, a TMB sera ativada automaticamente no checkout deste produto</div>
        </div>
      </div>

      <div className="btn-row" style={{ gap: 8 }}>
        <button className="btn btn-secondary" onClick={onErro}>Simular erro</button>
        <button className="btn btn-primary" onClick={onAtivo}>Simular aprovacao</button>
      </div>
    </div>
  )
}
