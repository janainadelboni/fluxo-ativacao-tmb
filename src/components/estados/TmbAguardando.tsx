interface Props {
  onAprovado: () => void
  onErro: () => void
}

export function TmbAguardando({ onAprovado, onErro }: Props) {
  return (
    <div className="estado-panel">
      <div className="alert alert-warning">
        A aprovacao esta demorando mais que o esperado. Voce recebera um e-mail e uma notificacao assim que sua conta for aprovada e o boleto parcelado estiver disponivel.
      </div>

      <p className="estado-hint">
        Voce pode sair desta pagina. Quando a TMB concluir a aprovacao, o boleto parcelado sera habilitado automaticamente e voce sera notificado.
      </p>

      <div className="btn-row" style={{ gap: 8 }}>
        <button className="btn btn-secondary" onClick={onErro}>Simular erro</button>
        <button className="btn btn-primary" onClick={onAprovado}>Simular aprovacao</button>
      </div>
    </div>
  )
}
