interface Props {
  onAprovado: () => void
  onErro: () => void
}

export function TmbAguardando({ onAprovado, onErro }: Props) {
  return (
    <div className="estado-panel">
      <div className="alert alert-warning">
        A aprovação está demorando mais que o esperado. Você receberá um e-mail e uma notificação assim que sua conta for aprovada e o boleto parcelado estiver disponível.
      </div>

      <p className="estado-hint">
        Você pode sair desta página. Quando a TMB concluir a aprovação, o boleto parcelado será habilitado automaticamente e você será notificado.
      </p>

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={onErro}>Simular erro</button>
        <button className="btn btn-primary" onClick={onAprovado}>Simular aprovação</button>
      </div>
    </div>
  )
}
