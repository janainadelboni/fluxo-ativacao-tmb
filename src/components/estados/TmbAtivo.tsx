interface Props {
  showCheckout: boolean
  onToggleCheckout: () => void
  onDesativar: () => void
}

export function TmbAtivo({ showCheckout }: Props) {
  return (
    <div className="estado-panel">
      {showCheckout ? (
        <div className="alert alert-success">
          Boleto parcelado ativo neste produto. A opção TMB já está disponível no checkout para os compradores.
        </div>
      ) : (
        <div className="alert alert-warning">
          Boleto parcelado desativado no checkout. O comprador não verá a opção TMB como forma de pagamento. Ative o switch acima para disponibilizar.
        </div>
      )}
    </div>
  )
}
