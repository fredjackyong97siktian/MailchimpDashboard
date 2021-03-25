
interface DialogComSize {
    width: boolean,
    height?: string
}

interface DialogComData {
    title:React.ReactFragment,
    content: React.ReactFragment,
    action: React.ReactFragment
}

interface DialogComOpen{
    open:  boolean,
    onClose: () =>void
}

interface DialogComSetting {
    onCloseSet : boolean
}

export interface DialogComInterface {
    size ?: DialogComSize,
    data: DialogComData,
    dialogStatus : DialogComOpen,
    dialogSetting : DialogComSetting,
    type ?: string | undefined
}
