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
        <div className="step-circle step-circle-done">&#10003;</div>
        <div>
          <div className="step-title">Cadastro do produtor enviado</div>
          <div className="step-desc">Aguardando TMB retornar o ID do produtor via webhook</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">2</div>
        <div>
          <div className="step-title">Ativacao neste produto</div>
          <div className="step-desc">Disponivel assim que o cadastro for confirmado</div>
        </div>
      </div>

      <div className="btn-row" style={{ gap: 8 }}>
        <button className="btn btn-secondary" onClick={onErro}>Simular erro</button>
        <button className="btn btn-primary" onClick={onAtivo}>Simular ativacao</button>
      </div>
    </div>
  )
}
